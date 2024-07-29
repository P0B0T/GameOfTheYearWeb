using Microsoft.AspNetCore.Mvc;

namespace GameOfTheYearWeb.Controllers
{
    public class GameController : Controller
    {
        public ActionResult GameBoard() => View();
    }
}
