using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EliteEcom.Models
{
    public class UserMaster
    {
        [Key]
        public int UserId { get; set; }
        public string ?UserName { get; set; }
        public string ? Password{ get; set; }
        [NotMapped]
        public string ?ConfirmPassword { get; set; }
    }
    public class LoginResponse   {
        [Key]
        public int UserId { get; set; }
        public string ?UserName { get; set; }
        public string ?Password { get; set; }
        public bool Result { get; set; }
        public string ?Message {  get; set; }    
    }
    }

