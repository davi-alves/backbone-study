<?php

class ContactsController extends BaseController
{



    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Contact::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $contact = new Contact(Input::all());
        if (!$contact->save()) {
            App::abort(500, 'Contact was not saved');
        }

        return Response::json($contact->toArray(), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return Contact::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        $contact = Contact::find($id);
        if(!$contact) {
            App::abort(404);
        }
        $contact->fill(Input::all());
        $contact->save();

        return Response::json($contact->toArray());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if(!$contact) {
            App::abort(404);
        }
        $contact->delete();

        return Response::make(null, 204);
    }

}
