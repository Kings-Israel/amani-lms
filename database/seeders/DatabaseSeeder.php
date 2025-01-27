<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CustomerInteractionCategory;
use App\Models\Industry;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $industries = [
            'Personal Services',
            'Real Estate & Housing',
            'Safety/Security & Legal',
            'Transportation',
            'Natural Resources/Environment',
            'Human Health & Animal Services',
            'General Hardware & Electronics',
            'Food & Hospitality',
            'Business & Information',
            'Fashion & Beauty Products',
            'Finance & Insurane',
            'Automobile Services',
            'Agriculture',
            'Construction',
            'Retail',
        ];

        collect($industries)->each(fn ($industry) => Industry::create(['name' => $industry]));

        $customer_interaction_categories = [
            'Customer Satisfaction Survey' => 2,
            'Prepayment' => 1,
            'Due Collection' => 1,
            'Arrear Collection' => 1,
            'First Visit LO' => 2,
            'First Visit CO' => 2
        ];

        collect($customer_interaction_categories)->each(fn ($customer_interaction_category, $key) => CustomerInteractionCategory::create(['name' => $customer_interaction_category, 'priority' => $key]));
    }
}
