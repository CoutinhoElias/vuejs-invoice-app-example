import Vue from 'vue';

var address = `Invoicy McInvoicer
123 Some streetvile
Streetville, 42069

Phone: (555) 555-1111`;


var line_items = [{
        name: "Web Updates",
        description: "Monthly web updates for customyltd.com (Oct. 3 - Oct. 24, 2009)",
        unit_cost: 650,
        quantity: 2,
    }, {
        name: "Logo design",
        description: "Applies some font and colors on text",
        unit_cost: 9000,
        quantity: 1,
    }

];

var app = new Vue({
    el: '#page-wrap',
    data: {
        address: address,
        customer_title: "Customy Limited. c/o John Customy",
        invoice_id: "INV 00123",
        invoice_date: "November 15, 2017",
        items: line_items,
        sub_total: 0.0,
        amount_paid : 0.0,
    },
    computed: {
        seen: function() {
            return this.items.length > 1;
        },
        balance_due : function() {
            //console.log(this.sub_tota
            return this.sub_total - this.amount_paid;
        }
    },
    watch: {
        items: function(new_items) {
            this.sub_total = total_items(this.items);
        }
    },
    methods: {
        add_a_row: function() {
            this.items.push({
                name: "",
                description: "",
                unit_cost: null,
                quantity: null,
            });
        },
        delete_a_row: function(index) {
            //console.log(index);
            this.items.splice(index, 1);
        },
        line_total: function(unit_cost, quantity) {
            if (unit_cost && quantity) {
                this.sub_total = total_items(this.items);
                return unit_cost * quantity;
            } else {
                return "";
            }
        }
    }

});

function total_items(items) {
    var total = 0.0;
    for (var i = 0; i < items.length; i++) {
        total += parseFloat(items[i].unit_cost * items[i].quantity);
    }
    return total;
}
