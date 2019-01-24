package project.stevy.com.shareloc;

import android.util.Log;

import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;

public class AsyncTask extends android.os.AsyncTask<URL, Void, String> {

    private HttpURLConnection httpURLConnection;

    JSONObject jsonObject;
    public AsyncTask(JSONObject jsonObject)
    {
        this.jsonObject = jsonObject;
    }

    @Override
    protected String doInBackground(URL... urls) {
        try {
            httpURLConnection = (HttpURLConnection) urls[0].openConnection();

            httpURLConnection.setRequestMethod("POST");
            httpURLConnection.setRequestProperty("Content-Type", "application/json");
            httpURLConnection.setRequestProperty("Accept", "application/json");
            httpURLConnection.setDoOutput(true);
            httpURLConnection.setDoInput(true);

            OutputStreamWriter wr = new OutputStreamWriter(httpURLConnection.getOutputStream());
            wr.write(jsonObject.toString());
            wr.flush();
            wr.close();



        } catch (ProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        InputStream in = null;
        try {
            in = new BufferedInputStream(httpURLConnection.getInputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
        BufferedReader reader = new BufferedReader(new InputStreamReader(in));



        String result = "";
        String tmp = "";

        try {
            while((tmp = reader.readLine())!= null)
            {
                result +=tmp;
            }
        }
        catch (Exception e)
        {
        }


        return result;
    }

    @Override
    protected void onPostExecute(String s) {
        super.onPostExecute(s);

        Log.d("ReturnServer", s);
    }

    @Override
    protected void onProgressUpdate(Void... values) {
        super.onProgressUpdate(values);
    }
}
