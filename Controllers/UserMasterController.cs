using EliteEcom.Data;
using EliteEcom.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace EliteEcom.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserMasterController : ControllerBase
    {

        private readonly ApplicationDbContext _dbContext;
        public UserMasterController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost("Register")]
        public async Task<ActionResult<UserMaster>> AddUser([FromBody] UserMaster register)
        {
            if (register.Password != register.ConfirmPassword)
                return BadRequest("Passwords do not match");


            await _dbContext.UserMaster.AddAsync(register);
            await _dbContext.SaveChangesAsync();
            return Ok(register);
        }
        [HttpPost("Login")]
        public ActionResult<LoginResponse> Login([FromBody] LoginResponse login)
        {
            var user = _dbContext.UserMaster.SingleOrDefault(m => m.UserName == login.UserName && m.Password == login.Password);

            var response = new LoginResponse();

            if (user != null)
            {
                response.UserId = user.UserId;
                response.UserName = user.UserName;
                response.Result = true;
                response.Message = "Login Success";
            }
            else
            {
                response.Result = false;
                response.Message = "Username or password is wrong";
            }
             
            return Ok(response);
        }

    }
}