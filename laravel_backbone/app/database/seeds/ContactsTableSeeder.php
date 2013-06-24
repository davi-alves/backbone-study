<?php

class ContactsTableSeeder extends Seeder {

    public function run()
    {
        // Uncomment the below to wipe the table clean before populating
        DB::table('contacts')->delete();

        $contacts = array(
            array(
                'first_name' => 'Davi',
                'last_name' => 'Alves',
                'email_address' => 'davi@email.com',
                'description' => 'Myself',
            ),
            array(
                'first_name' => 'Renata',
                'last_name' => 'Lima',
                'email_address' => 'renata@email.com',
                'description' => 'Noiva',
            ),
            array(
                'first_name' => 'Fran',
                'last_name' => 'Zé',
                'email_address' => 'fran@ze.com',
                'description' => 'Brother',
            ),

        );

        // Uncomment the below to run the seeder
        DB::table('contacts')->insert($contacts);
    }

}
