package project.stevy.com.shareloc;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class Signin extends AppCompatActivity {


    private EditText login, password;
    private Button btn_singin;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);
        login = (EditText) findViewById(R.id.editTextLoginSignin);
        password = (EditText) findViewById(R.id.editTextPasswordSignin);
        btn_singin = (Button) findViewById(R.id.buttonSignin);
        btn_singin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                JSONObject jsonObject = new JSONObject();

                //Toast.makeText(getApplicationContext(), "on est ici", Toast.LENGTH_LONG).show();

                try {
                    jsonObject.put("login", login.getText().toString());
                    jsonObject.put("password", password.getText().toString());


                    URL url = new URL("http://localhost:8080/shareloc_api/api/signin");
                    new AsyncTask(jsonObject).execute(url);

                } catch (MalformedURLException e) {
                    e.printStackTrace();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });


    }


}
