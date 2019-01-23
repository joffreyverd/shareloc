package project.stevy.com.shareloc;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Home extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home);

        configureSignupButton();
        configureSigninButton();
    }

    private void configureSignupButton(){
        Button signupButton = (Button) findViewById(R.id.buttonGoSignup);
        signupButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(Home.this, Signup.class));
            }
        });
    }

    private void configureSigninButton(){
        Button signinButton = (Button) findViewById(R.id.buttonGoSignin);
        signinButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(Home.this, Signin.class));
            }
        });
    }
}
