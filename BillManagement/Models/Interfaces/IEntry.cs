using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BillManagement.Interfaces
{
    public interface IEntry
    {
        DateTime Date { get; set; }
        double Amount { get; set; }
        string Description { get; set; }

        // Add method for creating PDF
    }
}