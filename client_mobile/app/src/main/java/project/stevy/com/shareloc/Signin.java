package project.stevy.com.shareloc;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class Signin extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);
    }

    final String url = "http://httpbin.org/get?param1=hello";


}
