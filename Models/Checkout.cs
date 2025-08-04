namespace EliteEcom.Models
{
    public class Checkout
    {
        public int Id { get; set; } //saleid 
        public int CustomerId { get; set; }
        public int Discount { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime CheckoutDate { get; set; }

        public string? DeliveryAddress1 { get; set; }
        public string? DeliveryAddress2 { get; set; }
        public string? DeliveryLocation { get; set; }
        public int DeliveryPincode { get; set; }
    }
}
