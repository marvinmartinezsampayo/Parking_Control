using Comun.DTO.Gestion;
using Comun.Enumeracion;
using Comun.Generales;
using Datos.Contrato.Gestion;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace Parking_Control_Web.Areas.Gestion.Controllers
{
    [Area("Gestion")]
    //[Route("[area]/[controller]/[action]")]
    [Authorize]
    public class ControlController : Controller
    {
        private readonly IBLConsultar_Detalle_Master _Detalle_Master;
        private readonly IGestion_Espacio_Parqueadero _Espacio;

        
        public ControlController(IBLConsultar_Detalle_Master Detalle_Master, IGestion_Espacio_Parqueadero espacio)
        {
            _Detalle_Master = Detalle_Master;
            _Espacio = espacio;
        }



        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Parqueadero()
        {
            //============= Carga Inicial=================================                    
            var _listaTipoVehiculo = await _Detalle_Master.ListaDetalle(3);
            var _listaEstadosPuesto = await _Detalle_Master.ListaDetalle(6);
            var _listEspacios = await _Espacio.ObtenerAsync<List<Respuesta_Get_Espacio_Parqueadero_Dto>>();

            ViewBag.ID_TIPO_VEHICULO = new SelectList(_listaTipoVehiculo, "ID", "NOMBRE");
            ViewBag.ID_ESTADO = new SelectList(_listaEstadosPuesto, "ID", "NOMBRE");
           
            ViewBag.List_Espacios = JsonConvert.SerializeObject(_listEspacios.Respuesta);






            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AgregarEspacioParqueadero(Parametros_Add_Espacio_Parqueadero_Dto modelo)
        {
            //============================= Carga Inicial=================================                    
            var _listaTipoVehiculo = await _Detalle_Master.ListaDetalle(3);
            var _listaEstadosPuesto = await _Detalle_Master.ListaDetalle(6);
            var _listEspacios = await _Espacio.ObtenerAsync<List<Respuesta_Get_Espacio_Parqueadero_Dto>>();

            ViewBag.ID_TIPO_VEHICULO = new SelectList(_listaTipoVehiculo, "ID", "NOMBRE");
            ViewBag.ID_ESTADO = new SelectList(_listaEstadosPuesto, "ID", "NOMBRE");
            ViewBag.List_Espacios = JsonConvert.SerializeObject(_listEspacios.Respuesta);
            //========================== Fin Carga Inicial=================================

            modelo.ID_ESPACIO = 0;

            if (!ModelState.IsValid)
            {
                TempData["ErrorMessage"] = "Error en la validación del formulario.";
                return RedirectToAction("Parqueadero", "Control", new { area = "Gestion" });
            }

            try
            {
                RespuestaDto<string> resultado = await _Espacio.GuardarAsync<Parametros_Add_Espacio_Parqueadero_Dto, string>(modelo);

                if (resultado.Codigo == EstadoOperacion.Bueno)
                {
                    TempData["SuccessMessage"] = "Espacio agregado correctamente.";
                }
                else
                {
                    TempData["ErrorMessage"] = "Ocurrió un error al guardar el espacio.";
                }

                
            }
            catch (Exception ex)
            {
                TempData["ErrorMessage"] = "Ocurrió un error al guardar el espacio.";
            }

            return RedirectToAction("Parqueadero", "Control", new { area = "Gestion" });

        }

    }
}
