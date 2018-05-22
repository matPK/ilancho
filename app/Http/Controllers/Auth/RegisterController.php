<?php

namespace App\Http\Controllers\Auth;

use App\Employee;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'cpf' => 'required|string|size:11|unique:employees',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Employee
     */
    protected function create(array $data)
    {
        $employee = new Employee;
        $employee->first_name = $data['first_name'];
        $employee->last_name = $data['last_name'];
        $employee->cpf = $data['cpf'];
        $employee->password = Hash::make($data['password']);
        $employee->restaurant_id = Auth::user()->restaurant_id;
        $employee->save();
        return $employee;
        /*
        return Employee::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'cpf' => $data['cpf'],
            'password' => Hash::make($data['password']),
        ]);
        */
    }
}
