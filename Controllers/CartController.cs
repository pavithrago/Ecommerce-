using EliteEcom.Data;
using EliteEcom.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace EliteEcom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public CartController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet("{customerId}")]
        public IActionResult GetCartItems(int customerId)
        {
            var cartItems = _dbContext.Carts
    .Include(c => c.Product) // if needed
    .Where(ci => ci.CustomerId == customerId)
    .ToList();

            return Ok(cartItems);
        }


        [HttpPost]
        public IActionResult AddToCart([FromBody] Cart cart)
        {
            try
            {
                _dbContext.Carts.Add(cart);
                _dbContext.SaveChanges();
                return Ok(new { result = true, message = "Added to cart" });
            }
            catch (Exception ex)
            {
                // This will help you find the exact cause
                return StatusCode(500, new { result = false, message = ex.Message });
            }
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteCartItem(int id)
        {
            var cartItem = _dbContext.Carts.FirstOrDefault(c => c.Id == id);

            if (cartItem == null)
            {
                return NotFound(new { message = "Cart item not found" });
            }

            _dbContext.Carts.Remove(cartItem);
            _dbContext.SaveChanges();

            return Ok(new { message = "Cart item deleted successfully" });
        }

    }
}

