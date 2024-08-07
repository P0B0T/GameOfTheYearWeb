using GameOfTheYearWeb.DataBase;
using GameOfTheYearWeb.DataBase.Entity;
using Microsoft.AspNetCore.Mvc;

namespace GameOfTheYearWeb.Controllers
{
    public class GameController : Controller
    {
        private readonly ApplicationDbContext _context;

        public GameController(ApplicationDbContext context)
        {
            _context = context;
        }

        public ActionResult GameBoard(string mode)
        {
            if (string.IsNullOrEmpty(mode))
            {
                ViewBag.Mode = "one";
                return View(GetTopFive());
            }

            ViewBag.Mode = "two";
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Add(Record record)
        {
            _context.Add(record);
            await _context.SaveChangesAsync();

            return RedirectToAction("GameBoard");
        }

        public List<Record> GetTopFive() => _context.Records.OrderByDescending(x => x.Score)
                                                            .Take(5)
                                                            .ToList();
    }
}
