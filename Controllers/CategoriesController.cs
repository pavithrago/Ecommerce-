using EliteEcom.Data;
using EliteEcom.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EliteEcom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public CategoriesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        public ActionResult GetCategories()
        {
            var categories = _dbContext.Categories.ToList();
            return Ok(categories);
        }
        [HttpPost]
        public async Task<ActionResult<Category>> CreateCategories(Category category)
        {
            category.Id = 0;
            _dbContext.Categories.Add(category);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCategories), new { id = category.Id }, category);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, [FromBody] Category category)
        {
            if (id != category.Id)
            {
                return BadRequest("Category ID mismatch.");
            }

            var existingCategory = await _dbContext.Categories.FindAsync(id);
            if (existingCategory == null)
            {
                return NotFound("Category not found.");
            }

            existingCategory.Name = category.Name;

            try
            {
                await _dbContext.SaveChangesAsync();
                return Ok(existingCategory);
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(500, "Error updating category: " + ex.Message);
            }
        }
    }
}
