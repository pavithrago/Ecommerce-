using System.ComponentModel.DataAnnotations.Schema;

namespace EliteEcom.Models
{
    public class CustomerOrders
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public List<int>? OrderIds { get; set; }
        public DateTime OrderDate { get; set; }

        [ForeignKey("CustomerId")]
        public Customer ?Customer { get; set; }


    }
}
