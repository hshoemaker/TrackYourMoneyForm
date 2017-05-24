using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BillManagement.Models
{
    public class DocumentFormViewModel
    {
        public UserModel User { get; set; }
        public DateTime TodaysDate { get; set; }
        public double BalanceInChecking { get; set; }
        public List<LastPostedEntry> LastPostedEntries { get; set; }
        public List<LastPostedEntry> OutstandingTransactionsEntries { get; set; }
        public List<CashFlowEntry> CashFlowEntries { get; set; }
        public List<AssumptionsEntry> AssumptionsEntries { get; set; }
        public List<AssumptionsEntry> NextStepsEntries { get; set; }
    }
}