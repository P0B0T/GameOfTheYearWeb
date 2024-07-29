using Microsoft.AspNetCore.Mvc;

namespace GameOfTheYearWeb.Controllers
{
    public class ExitController : Controller
    {
        public IActionResult Exit() => View();
    }
}
