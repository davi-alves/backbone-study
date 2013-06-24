<?php

class TasksTableSeeder extends Seeder {

    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('tasks')->delete();

        $tasks = array(
            array(
                'title' => 'Go to the store',
            ),
            array(
                'title' => 'Buy cookies',
            ),
            array(
                'title' => 'Buy beer',
            ),
        );

        // Uncomment the below to run the seeder
        DB::table('tasks')->insert($tasks);
    }

}
