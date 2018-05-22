<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*
        $this->validate($request,[
            'image_name' => 'required|mimes:jpeg,bmp,jpg,png|between:1,6000',
        ]);

        $image = $request->file('image_name');

        $name = $request->file('image_name')->getClientOriginalName();

        $image_name = $request->file('image_name')->getRealPath();

        Cloudder::upload($image_name, null);

        list($width, $height) = getimagesize($image_name);

        $image_url = Cloudder::show(Cloudder::getPublicId(), [
            'width' => $width,
            'height' => $height,
        ]);

        //save to uploads directory
        $image->move(public_path('uploads'), $name);

        //Save images
        $this->saveImages($request, $image_url);

        return redirect()->back()->with('status', 'Image Uploaded Successfully');
        */
    }
/*
    public function saveImages(Request $request, $image_url)
    {
        $image = new Upload();
        $image->image_name = $request->file('image_name')->getClientOriginalName();
        $image->image_url = $image_url;

        $image->save();
    }
*/
    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
