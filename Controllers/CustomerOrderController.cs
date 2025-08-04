using EliteEcom.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EliteEcom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerOrderController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public CustomerOrderController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet("{customerId}")]
        public ActionResult GetCustomerOrders(int customerId)
        {
            var CustomerOrders = _dbContext.CustomerOrders.Where(c => c.CustomerId == customerId).ToList();
            return Ok(CustomerOrders);
        }
    }
}
