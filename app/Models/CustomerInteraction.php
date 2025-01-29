<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerInteraction extends Model
{
    use HasFactory;

        /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Get the customer that owns the CustomerDocument
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Get the user that owns the CustomerDocument
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the interactionType that owns the CustomerInteraction
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function interactionType(): BelongsTo
    {
        return $this->belongsTo(CustomerInteractionType::class);
    }

    /**
     * Get the interactionCategory that owns the CustomerInteraction
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function interactionCategory(): BelongsTo
    {
        return $this->belongsTo(CustomerInteractionCategory::class);
    }
}
