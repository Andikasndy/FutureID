<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\news;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\NewsCollection;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function _index()
    {
        $news = new NewsCollection(News::paginate(10));
        return Inertia::render('Homepage',[
                'title' => 'FutureID',
                'description' => 'Selamat Datang di FutureID, kabar teknologi terupdate luar dan dalam negeri',
                'news' => $news
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new News();
        $news -> title = $request -> title;
        $news -> description = $request -> description;
        $news -> category = $request -> category;
        $news -> author = auth ()-> user()-> email;
        $news -> save();
        return redirect()->back()->with('success', 'berita berhasil di muat');
    }

    /**
     * Display the specified resource.
     */
    public function show(news $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(news $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, news $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(news $news)
    {
        //
    }
}
