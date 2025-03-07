using Comun.DTO.Gestion;
using Datos.Contrato.Gestion;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Parking_Control_Web.Areas.Gestion.Controllers
{
    [Area("Gestion")]
    //[Route("[area]/[controller]/[action]")]
    [Authorize]
    public class ControlController : Controller
    {
        private readonly IBLConsultar_Detalle_Master _Detalle_Master;

        public ControlController(IBLConsultar_Detalle_Master Detalle_Master)
        {
            _Detalle_Master = Detalle_Master;
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

            ViewBag.ID_TIPO_VEHICULO = new SelectList(_listaTipoVehiculo, "ID", "NOMBRE");
            ViewBag.ID_ESTADO = new SelectList(_listaEstadosPuesto, "ID", "NOMBRE");
            
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AgregarEspacioParqueadero(Parametros_Add_Espacio_Parqueadero_Dto modelo)
        {
            if (!ModelState.IsValid)
            {
                return View(modelo); // Retorna los errores de validación
            }

            return View();
        }

    }
}
