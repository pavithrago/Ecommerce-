namespace EliteEcom.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string? Product { get; set; }
        public int Amount { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
