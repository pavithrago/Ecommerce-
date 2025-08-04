using System.ComponentModel.DataAnnotations;

namespace EliteEcom.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ?Name { get; set; }
        [Required]
        public string ?Description { get; set; }
        [Required]
        public decimal ?Price { get; set; }
        [Required]
        public int CategoryId { get; set; }
        [Url]
        public string ?ImageUrl { get; set; }
        public string ?DeliveryTimeSpan { get; set; }

    }
}
