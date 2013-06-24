<?php

class TasksController extends BaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $task = new Task(Input::all());
        if (!$task->save()) {
            App::abort(500, 'Task was not saved');
        }

        return Response::json($task->toArray(), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return Task::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        $task = Task::find($id);
        if(!$task) {
            App::abort(404);
        }
        $task->fill(Input::all());
        $task->save();

        return Response::json($task->toArray());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $task = Task::find($id);
        if(!$task) {
            App::abort(404);
        }
        $task->delete();

        return Response::make(null, 204);
    }

}
