using BillManagement.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BillManagement.Models
{
    public class AssumptionsEntry: IEntry
    {
        public DateTime Date { get; set; }
        public double Amount { get; set; }
        public string Description { get; set; }
    }
}