using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TempleOfInk.Models;

namespace TempleOfInk.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }
        public IActionResult RegistroUsuario()
        {
            return View();
        }
        public IActionResult Galeria()
        {
            return View();
        }

        public IActionResult Membresia()
        {
            return View();
        }
        public IActionResult NuevoTestimonio()
        {
            return View();
        }
        public IActionResult AgendaArtistas()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
