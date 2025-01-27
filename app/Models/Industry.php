<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Industry extends Model
{
    use HasFactory;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Get all of the businessTypes for the Industry
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function businessTypes(): HasMany
    {
        return $this->hasMany(BusinessType::class);
    }
}
