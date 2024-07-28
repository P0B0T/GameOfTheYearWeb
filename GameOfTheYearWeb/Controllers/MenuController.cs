using Microsoft.AspNetCore.Mvc;

namespace GameOfTheYearWeb.Controllers
{
    public class MenuController : Controller
    {
        public IActionResult Menu() => View();
    }
}
