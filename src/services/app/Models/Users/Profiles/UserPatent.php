<?php
/******************************************************************************\
|                                                                              |
|                                UserPatent.php                                |
|                                                                              |
|******************************************************************************|
|                                                                              |
|       This defines a model of a user's publications information.             |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.txt', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

namespace App\Models\Users\Profiles;

use App\Models\TimeStamps\TimeStamped;
use App\Models\Users\UserOwned;

class UserPatent extends TimeStamped
{
	/**
	 * The traits that are inherited.
	 *
	 */
	use UserOwned;

	//
	// attributes
	//

	/**
	 * The table associated with the model.
	 *
	 * @var string
	 */
	protected $table = 'user_patents';

	/**
	 * Indicates if the IDs are auto-incrementing.
	 *
	 * @var bool
	 */
	public $incrementing = false;

	/**
	 * The "type" of the primary key ID.
	 *
	 * @var string
	 */
	protected $keyType = 'string';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [

		// id attributes
		//
		'id',
		'user_id',

		// who
		//
		'authors',

		// what
		//
		'patent_kind',
		'title',
		'subjects',

		// when
		//
		'year',

		// where
		//
		'country',

		// why / how
		//
		'patent_number',
		'url'
	];

	/**
	 * The attributes that should be visible in serialization.
	 *
	 * @var array
	 */
	protected $visible = [

		// id attributes
		//
		'id',
		'user_id',

		// who
		//
		'authors',

		// what
		//
		'patent_kind',
		'title',
		'subjects',

		// when
		//
		'year',

		// where
		//
		'country',
		
		// why / how
		//
		'patent_number',
		'url'
	];
}