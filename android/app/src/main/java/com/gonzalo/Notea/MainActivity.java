package com.gonzalo.Notea;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;

public class MainActivity extends BridgeActivity {

    @Override

    public void onCreate(Bundle saveInstanceState){

        super.onCreate(saveInstanceState);

        //Aqui los pluggins no oficiales
        registerPlugin(GoogleAuth.class);

    }
}
