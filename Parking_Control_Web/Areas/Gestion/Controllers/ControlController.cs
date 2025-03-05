using Comun.DTO.Gestion;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Parking_Control_Web.Areas.Gestion.Controllers
{
    [Area("Gestion")]
    [Authorize]
    public class ControlController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Parqueadero()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AgregarEspacioParqueadero([FromBody] Parametros_Add_Espacio_Parqueadero_Dto modelo)
        {
            if (!ModelState.IsValid)
            {
                return View(modelo); // Retorna los errores de validación
            }



            return View();
        }

    }
}
