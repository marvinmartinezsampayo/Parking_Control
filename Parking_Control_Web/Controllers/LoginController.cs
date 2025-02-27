using Comun.DTO.Generales;
using Comun.DTO.Seguridad;
using Datos.Contratos.Login;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Parking_Control_Web.Controllers
{
    public class LoginController : Controller
    {
        private readonly IGestionUsuario _gestionUsuario;

        public LoginController(IGestionUsuario gestionUsuario)
        {
            _gestionUsuario = gestionUsuario;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Index(LoginDto modelo)
        {
            if (!ModelState.IsValid)
            {
                ViewData["Mensaje"] = "Los datos ingresados no son validos";
                return View();
            }

            string usuario = modelo.Usuario;
            string contrasena = modelo.Clave;


            //****** Validamos la contraseña del usuario
            UsuarioDto UsuarioActivo = await _gestionUsuario.ValidarLogin(modelo);

            if (UsuarioActivo.PRIMER_APELLIDO == "" || UsuarioActivo.HABILITADO == false)
            {
                //ViewData["ReturnUrl"] = returnurl;
                ViewData["Mensaje"] = "Usuario o Contraseña incorrecta, revise";
                //ModelState.AddModelError("", "Usuario o Contraseña incorrecta, revise");
                return View();
            }
            else
            {
                //Obtener IP
                //var Ip = _httpContextAccessor.HttpContext?.Connection?.RemoteIpAddress?.ToString();            
                //HttpContext.Session.SetString("IpMaquina", Ip);

                //Consultamos los Roles

                List<Roles_X_UsuarioDto> listRoles = await _gestionUsuario.ConsultarRolesUsuario(UsuarioActivo.ID);

                //generamos los claims
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, Convert.ToString(UsuarioActivo.NRO_IDENTIFICACION)),
                    new Claim("IdUsuario", Convert.ToString(UsuarioActivo.ID)),
                    new Claim("UsuarioEmpresarial", Convert.ToString(UsuarioActivo.USUARIO_EMPRESARIAL)),
                    new Claim("Identificacion", Convert.ToString(UsuarioActivo.NRO_IDENTIFICACION)),
                    new Claim("IdTipoIdentificacion", Convert.ToString(UsuarioActivo.ID_TIPO_IDENTIFICACION)),
                    new Claim("PrimerNombre", Convert.ToString(UsuarioActivo.PRIMER_NOMBRE)),
                    new Claim("SegundoNombre", Convert.ToString(UsuarioActivo.SEGUNDO_NOMBRE)),
                    new Claim("PrimerApellido", Convert.ToString(UsuarioActivo.PRIMER_APELLIDO)),
                    new Claim("SegundoApellido", Convert.ToString( UsuarioActivo.SEGUNDO_APELLIDO)),
                    new Claim("NombreFull", Convert.ToString(UsuarioActivo.PRIMER_NOMBRE + " " + UsuarioActivo.SEGUNDO_NOMBRE + " " + UsuarioActivo.PRIMER_APELLIDO + " " + UsuarioActivo.SEGUNDO_APELLIDO)),
                    new Claim("Email",Convert.ToString( UsuarioActivo.EMAIL)),
                    new Claim("Telefono",Convert.ToString( UsuarioActivo.TELEFONO)),
                    new Claim("Clave",Convert.ToString( UsuarioActivo.CONTRASENA)),
                    new Claim("Estado",Convert.ToString( UsuarioActivo.HABILITADO))
                };

                foreach (var rol in listRoles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, Convert.ToString(rol.ID_ROL)));
                    claims.Add(new Claim(ClaimTypes.Actor, Convert.ToString(rol.ROL_STR)));
                }

                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                AuthenticationProperties properties = new AuthenticationProperties()
                {
                    AllowRefresh = true,
                    //IsPersistent = true, // Para que la cookie sea persistente
                    //ExpiresUtc = DateTime.UtcNow.AddMinutes(1) // Tiempo de expiración
                };

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                        new ClaimsPrincipal(claimsIdentity), properties);
                        
                //return RedirectToAction(nameof(HomeController.Index), "Home");
                return RedirectToAction("Index", "Control", new { area = "Gestion" });
            }
        }



        public async Task<IActionResult> Salir()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index","Login");
        }
    }
}
