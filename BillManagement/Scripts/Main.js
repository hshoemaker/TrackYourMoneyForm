var app = angular.module("MoneyTrackerApp", ['ngAnimate']);

app.controller("MoneyTrackerCtrl", function ($scope) {
    // ======================================================
    // Variables
    // ======================================================
    var isInit = true;
    var previousBal = 0;

    var OTId = 0;
    var LDId = 0;
    var CFId = 0;
    var AspId = 0;
    var NSId = 0;

    $scope.ChkBal = 0;

    $scope.OT = {};
    $scope.LD = {};
    $scope.CF = {};
    $scope.Asp = {};
    $scope.NS = {};

    $scope.OutstandingTransactions = [];
    $scope.LastDebits = [];
    $scope.CashFlow = [];
    $scope.Assumptions = [];
    $scope.NextSteps = [];
    $scope.operations = [{ value: "add", sign: "+", selected: "" }, { value: "subtract", sign: "-", selected: "btn-info" }];


    // ======================================================
    // General Entry Functions
    // ======================================================
    $scope.EditEntry = function ($entry) {
        $entry.editing = "editing";
    };

    $scope.DoneEditingEntry = function ($entry) {
        $entry.editing = "notEditing";
    };

    $scope.RemoveEntry = function ($entry, $collection) {
        $collection.splice($collection.findIndex(x => x === $entry), 1);
    };

    $scope.SelectOperation = function ($operation) {
        if ($operation.selected == "") {
            var index = $scope.operations.findIndex(x => x !== $operation)
            $operation.selected = "btn-info";
            $scope.operations[index].selected = "";
        }
    };

    $scope.CalcAmtLeft = function ($value) {
        var index = $scope.CashFlow.findIndex(x => x === $value);
        var ctr = 0;
        var result = $scope.ChkBal;

        while (ctr <= index) {
            result = result - $scope.CashFlow[ctr].Amount;
            ctr++;
        }

        return result;
    };

    $scope.abs = function ($value) {
        return Math.abs($value);
    }


    // ======================================================
    // Outstanding Transactions Functions
    // ======================================================
    $scope.AddOT = function () {
        $scope.OT.id = OTId;
        $scope.OT.editing = "notEditing";
        $scope.OutstandingTransactions.push($scope.OT);
        $scope.OT = {};
        OTId++;
    };


    // ======================================================
    // Last Debits Functions
    // ======================================================
    $scope.AddLD = function () {
        $scope.LD.id = LDId;
        $scope.LD.editing = "notEditing";
        $scope.LastDebits.push($scope.LD);
        $scope.LD = {};
        LDId++;
    };


    // ======================================================
    // Cash Flow Functions
    // ======================================================
    $scope.AddCF = function () {
        if (isInit) {
            previousBal = parseFloat($scope.ChkBal);
            isInit = false;
        }

        if ($scope.operations[0].selected == "") {
            //$scope.CF.LeftInAcct = previousBal - parseFloat($scope.CF.Amount);
            $scope.CF.Operation = "-";
        }
        else {
            //$scope.CF.LeftInAcct = previousBal + parseFloat($scope.CF.Amount);
            $scope.CF.Amount = -$scope.CF.Amount;
            $scope.CF.Operation = "+";
        }
        
        previousBal = $scope.CF.LeftInAcct;
        $scope.CashFlow.push($scope.CF);
        $scope.CF = {};
    };


    // ======================================================
    // Assumptions Functions
    // ======================================================
    $scope.AddAsp = function () {
        $scope.Assumptions.push($scope.Asp);
        $scope.Asp = {};
    };


    // ======================================================
    // Next Steps Functions
    // ======================================================
    $scope.AddNS = function () {
        $scope.NextSteps.push($scope.NS);
        $scope.NS = {};
    };


    // ======================================================
    // Finalization
    // ======================================================
    $scope.Finalize = function () {

    };
});