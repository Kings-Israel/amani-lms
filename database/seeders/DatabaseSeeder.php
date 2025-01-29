<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\BusinessType;
use App\Models\Category;
use App\Models\County;
use App\Models\CustomerInteractionCategory;
use App\Models\Document;
use App\Models\ExpenseType;
use App\Models\IncomeRange;
use App\Models\Industry;
use App\Models\LoanType;
use App\Models\PaymentType;
use App\Models\PrequalifiedLoan;
use App\Models\Relationship;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            '1-30 Days' => '30',
            '31-60 Days' => '60',
            '61-90 Days' => '90',
            '91-120 Days' => '120',
            '121-150 Days' => '150',
            'Over 150 Days' => '151'
        ];

        collect($categories)->each(fn ($days, $category) => Category::create(['name' => $category, 'days' => $days]));

        $industries = [
            'Personal Services' => [
                'Dry Cleaning/Laundry',
                'Tailoring Services',
                'Beauty Salon',
                'Photography',
                'Entertainment, Party & Events Planning',
                'Massage & Fitness Centre',
                'Barber Shop',
                'Cleaning Services',
            ],
            'Real Estate & Housing' => [
                'Contractor, Plumbing & Interior Design',
                'Warehouse & Equipment Rental',
                'Workshop (Wood & Metal)',
                'Concrete/Balast Manufacturing',
                'Real Estate Broker/Agent',
                'House Repair & Maintenance',
            ],
            'Safety/Security & Legal' => [
                'Security System Services',
                'Legal Services',
                'Security Guard Company',
                'Security System Services',
                'Security System Services',
                'Security System Services',
            ],
            'Transportation' => [
                'Motor Bike Transportation',
                'Taxi & Rental Services',
                'Boat Services',
                'Towing',
            ],
            'Natural Resources/Environment' => [
                'Firewood & Charcoal Vendor',
                'Oil & Gas Distribution',
                'Water Vending',
            ],
            'Human Health & Animal Services' => [
                'Dentistry',
                'Pharmacy/Dispensing Chemist',
                'Agro-vet',
                'Private Health Services',
            ],
            'General Hardware & Electronics' => [
                'Household Utensils',
                'Building & Construction Material',
                'Electronic Accessory shops/Repairs'
            ],
            'Food & Hospitality' => [
                'Green Grocery (Fruit/Vegetables)',
                'Food Kiosks',
                'Retail Shop',
                'Guest House/Lodges',
                'Bar/Restaurant',
                'Ice Cream',
                'Hawking - Mobile merchandise services',
                'Caterer',
                'Beverage Manufacturing - Juice etc',
                'Seafood - Fish vendor',
                'Cereals',
                'Meat Vendor - Butchery',
                'Bakery (Bread & Confectionaries)',
            ],
            'Business & Information' => [
                'Video Production',
                'Travel Agency',
                'Bureu & Publishing Services',
                'Business Consultant (Records keeping)',
            ],
            'Fashion & Beauty Products' => [
                'Cosmetic Shop',
                'Footware Shop',
                'New Clothes',
                'Second Hand Clothes',
                'Tailoring'
            ],
            'Finance & Insurane' => [
                'Book Keeping & Collections Agency',
                'Pawn Brokers (Shylock)',
                'Mobile Money Services (M-PESA)',
                'Insurance Services',
            ],
            'Automobile Services' => [
                'Motor Vehicle/Bike Repair',
                'Automotive Part Sale',
                'Car Wash/Detailing',
                'New Motor Vehicle/Bike Sales',
            ],
            'Agriculture' => [
                'Farming'
            ],
            'Construction' => [
                'Welding'
            ],
            'Retail' => [
                'Wines & Spirits Retailer'
            ],
        ];

        collect($industries)->each(function ($business_types, $industry) {
            $industry = Industry::create(['name' => $industry]);
            foreach ($business_types as $business_type) {
                BusinessType::create([
                    'industry_id' => $industry->id,
                    'name' => $business_type
                ]);
            }
        });

        $counties = [
            'Mombasa',
            'Kwale',
            'Kilifi',
            'Tana-River',
            'Lamu',
            'Taita-Taveta',
            'Garissa',
            'Wajir',
            'Mandera',
            'Marsabit',
            'Isiolo',
            'Meru',
            'Tharaka-Nithi',
            'Embu',
            'Kitui',
            'Machakos',
            'Makueni',
            'Nyandarua',
            'Nyeri',
            'Kirinyaga',
            'Muranga',
            'Kiambu',
            'Turkana',
            'West Pokot',
            'Samburu',
            'Trans-Nzoia',
            'Uasin Gishu',
            'Elgeyo-Marakwet',
            'Nandi',
            'Baringo',
            'Laikipia',
            'Nakuru',
            'Narok',
            'Kajiado',
            'Kericho',
            'Bomet',
            'Kakamega',
            'Vihiga',
            'Bungoma',
            'Busia',
            'Siaya',
            'Kisumu',
            'Homa Bay',
            'Migori',
            'Kisii',
            'Nyamira',
            'Nairobi',
        ];

        collect($counties)->each(fn ($county) => County::create(['name' => $county]));

        $loan_types = [
            'daily', 'weekly'
        ];

        collect($loan_types)->each(fn ($loan_type) => LoanType::create(['name' => $loan_type]));

        $payment_types = [
            'Loan Settlement', 'Loan Disbursement', 'Processing Fee'
        ];

        collect($payment_types)->each(fn ($payment_type) => PaymentType::create(['name' => $payment_type]));

        $expense_types = [
            'Stationery',
            'Field',
            'Airtime',
            'Fuel',
            'R/Maintenance',
            'Office Lunch',
            'H/R',
            'Director Expenses',
            'Rent',
            'Salary',
            'Phone',
            'Electricity',
            'Marketing',
            'Paybill',
        ];

        collect($expense_types)->each(fn ($expense_type) => ExpenseType::create(['expense_name' => $expense_type]));

        $customer_interaction_categories = [
            'Customer Satisfaction Survey' => 2,
            'Prepayment' => 1,
            'Due Collection' => 1,
            'Arrear Collection' => 1,
            'First Visit LO' => 2,
            'First Visit CO' => 2
        ];

        collect($customer_interaction_categories)->each(fn ($key, $customer_interaction_category) => CustomerInteractionCategory::create(['name' => $customer_interaction_category, 'priority' => $key]));

        $roles = [
            'manager',
            'customer_informant',
            'accountant',
            'field_agent',
            'investor',
            'admin',
            'Intern',
            'collection_officer',
            'agent_care',
            'phone_handler',
            'sector_manager',
            'supervisor',
        ];

        collect($roles)->each(fn ($role) => Role::create(['name' => $role]));

        $documents = [
            'National ID',
            'Passport',
            'Alien ID',
            'Driving License'
        ];

        collect($documents)->each(fn ($document) => Document::create(['name' => $document]));

        $income_ranges = [
            'Below KSh 10,000',
            'KSh 10,000 - 20,000',
            'KSh 20,000 - 30,000',
            'KSh 30,000 - 40,000',
            'KSh 40,000 - 50,000',
            'KSh 50,000 - 60,000',
            'KSh 60,000 - 70,000',
            'KSh 70,000 - 80,000',
            'KSh 80,000 - 90,000',
            'Above KSh 90,000'
        ];

        collect($income_ranges)->each(fn ($income_range) => IncomeRange::create(['name' => $income_range]));

        $prequalified_loans = [
            7000,
            13500,
            20250,
            27000,
            33760,
            40500,
            54000,
            67500,
            81000
        ];

        collect($prequalified_loans)->each(fn ($prequalified_loan) => PrequalifiedLoan::create(['amount' => $prequalified_loan]));

        $relationships = [
            'Father',
            'Mother',
            'Son',
            'Daughter',
            'Brother',
            'Sister',
            'Spouse',
            'Other',
        ];

        collect($relationships)->each(fn ($relationship) => Relationship::create(['name' => $relationship]));

        // $reports = [
        //     'FIELD AGENT PERFORMANCE',	'Field Agent Performance',	'field_agent_performance',
        //     'BRANCH MANAGER PERFORMANCE',	'Manager Performance Report',	'manager_officer_performance',
        //     'LOANS DUE TODAY',	'Loans Due Today',	'loan_due_today',
        //     'LOAN ARREARS',	'Loan Arrears',	'loan_arrears',
        //     'LOAN ARREARS WITH SKIPPED PAYMENTS',	'Loan Arrears with skipped payments ',	'loan_arreas_skipped_payments',
        //     'NON - PERFORMING LOANS',	'Non - Performing Loans',	'non_performing_loans',
        //     'MPESA REPAYMENTS',	'MPesa Repayments',	'mpesa_repayments',
        //     'ROLLED OVER LOANS',	'Rolled Over Loans',	'rolled_over_loans',
        //     'DISBURSED LOANS',	'Disbursed Loans',	'disbursed_loans',
        //     'INCOME STATEMENT',	'Income Statement',	'income_statement_v2',
        //     'GROUP REPORTS',	'Group Reports',	'group_reports',
        //     'SMS SUMMARY REPORT',	'SMS SUMMARY REPORT	',	'sms_summary',
        //     'CUSTOMER ACCOUNT STATEMENT',	'Customer Account Statement',	'customer_account_statement',
        //     'LOAN COLLECTIONS PER MONTH',	'Loan Collections per month',	'loan_collections_per_month',
        //     'LOANS PENDING DISBURSEMENT',	'Loans Pending Disbursement',	'loan_pending_disbursements',
        //     'OUTSTANDING LOAN BALANCE',	'Outstanding Loan Balance\r\n',	'loans_balance',
        //     'LOANS PENDING APPROVAL',	'Loans Pending Approval',	'loan_pending_approval',
        //     'DISBURSED LOANS SUMMARY PER MONTH',	'disbursement loan summary per month',	'loan_disbursement_permonth',
        //     'DISBURSED LOANS SUMMARY',	'Disbursed Loans Summary',	'disbursed_loans_summary',
        //     'LOAN COLLECTION',	'Loan Collections',	'loan_collections',
        //     'CUSTOMER LISTING',	'Customer Listing',	'customer_listing',
        //     'CASHFLOW STATEMENT',	'Cashflow statement',	'cash_flow_statement',
        //     'BRANCH EXPENSES',	'Expenses of a branch',	'branch_expenses',
        //     'INACTIVE CUSTOMERS',	'Inactive Customers',	'inactive_customers',
        //     'BLOCKED CUSTOMERS',	'Blocked Customers',	'blocked_customers',
        //     'PAR ANALYSIS',	'PAR ANALYSIS',	'par_analysis',
        //     'COLLECTION RATE',	'COLLECTION RATE',	'collection_rate',
        //     'CUSTOMER SCORING REPORT',	'CUSTOMER SCORING REPORT',	'customer_scoring',
        //     'SYSTEM USERS',	'System Users',	'systems_users',
        //     'GROUP SCORING REPORT',	'Group scoring overview',	'group_scoring',	1,
        //     'DISBURSED GROUP LOANS',	'Disbursed Group Loans',	'group_disbursed_loans',	1,
        //     'GROUP LOANS IN ARREARS',	'Group loans in arrears',	'group_loan_arrears',	1,
        //     'GROUP LOANS WITH SKIPPED PAYMENTS',	'Group Loans with skipped payments',	'group_loan_skipped_payments',	1,
        //     'GROUP LOAN BALANCES',	'List of group lending loans with balances',	'group_loans_balance',	1,
        //     'CUSTOMER INTERACTIONS',	'SIMPLE REPORT FOR VIEWING ALL CUSTOMER INTERACTIONS\r\n',	'customer-interactions-report',
        //     'DEFAULT ANALYSIS REPORT',	'A report that shows the money that was not paid in a particular month',	'default_analysis_report',
        //     'LEADS REPORT',	'LEADS REPORT',	'leads',
        // ];
    }
}
