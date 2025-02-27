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

    }
}
