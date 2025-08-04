using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EliteEcom.Models
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public int ProductId { get; set; }
        [Required]
        public int Quantity { get; set; }
        public string? ProductName { get; set; } = string.Empty;
        public decimal? ProductPrice { get; set; }
        public string? ProductImageUrl { get; set; } = string.Empty;
        [ForeignKey("ProductId")]
        public Product? Product { get; set; }

    }
}
