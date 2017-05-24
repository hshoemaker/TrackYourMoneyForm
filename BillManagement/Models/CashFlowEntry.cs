using BillManagement.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BillManagement.Models
{
    public class CashFlowEntry: IEntry
    {
        public DateTime Date { get; set; }
        public double Amount { get; set; }
        public string Description { get; set; }
        public double LeftInAccount { get; set; }
        public IEntry PreviousEntry { get; set; }

        public CashFlowEntry()
        {

        }

        public CashFlowEntry(DateTime date, double amount, string description, CashFlowEntry previous)
        {
            Date = date;
            Amount = amount;
            Description = description;
            PreviousEntry = previous;
            LeftInAccount = previous.LeftInAccount - amount;
        }
    }
}