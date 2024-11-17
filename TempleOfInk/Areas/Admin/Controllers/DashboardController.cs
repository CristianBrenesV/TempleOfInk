using Microsoft.AspNetCore.Mvc;

namespace TempleOfInk.Areas.Admin.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
