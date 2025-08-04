using EliteEcom.Data;
using EliteEcom.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace EliteEcom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public CheckoutController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost]
        public async Task<ActionResult> ProcessCheckout(Checkout checkout)
        {

            _dbContext.Checkouts.Add(checkout);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(ProcessCheckout), new { id = checkout.Id }, checkout);
        }


        [HttpPost("PlaceOrder")]
        public IActionResult PlaceOrder([FromBody] Checkout checkout)
        {
            if (checkout == null)
                return BadRequest("Invalid checkout data");

            checkout.CheckoutDate = DateTime.Now;

            try
            {
                _dbContext.Checkouts.Add(checkout);
                _dbContext.SaveChanges();

                return Ok(new
                {
                    success = true,
                    message = "Order placed successfully!",
                    orderId = checkout.Id
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }
    }
}
