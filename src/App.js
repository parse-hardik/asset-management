import logo from './logo.svg';
import './App.css';
import Contract from './smart-contract';
import web3 from './web3';


function App() {
  web3.eth.defaultAccount = "0xB125d7D69936714fC85E411593cf113E0f942fca";
  function handle_add_supported_asset(e){
    var accounts=[];
     web3.eth.getAccounts().then((acc)=>{
      console.log(acc);
      accounts = acc;
      console.log("acounts : ", accounts[0]);
    }).then(function(){
        var asset = document.getElementById("supported_asset").value;
      console.log("acounts 32 : ", accounts[0]);
      Contract.methods.add_supported_asset(asset).send({
        from: accounts[0],
      }).catch(function(err){
        alert(err.message);
      });
    })  
    e.preventDefault();
  }
  function handle_add_wallet(e){
    var accounts=[];
     web3.eth.getAccounts().then((acc)=>{
      console.log(acc);
      accounts = acc;
      console.log("acounts : ", accounts[0]);
    }).then(function(){
        var address = document.getElementById("user_address").value;
      console.log("acounts 32 : ", accounts[0]);
      Contract.methods.add_wallet(address).send({
        from: accounts[0],
      }).catch(function(err){
        alert(err.message);
      });
    })  
    e.preventDefault();
  }
  function handle_add_validator(e){
    var accounts=[];
     web3.eth.getAccounts().then((acc)=>{
      console.log(acc);
      accounts = acc;
      console.log("acounts : ", accounts[0]);
    }).then(function(){
        var validator_details = document.getElementById("validator_details").value;
        var details = validator_details.split(',');
        const validator_address = details[0];
        const asset_type = details[1];
        console.log(details);
      console.log("acounts 32 : ", accounts[0]);
      Contract.methods.add_validator(validator_address, asset_type).send({
        from: accounts[0],
      }).catch(function(err){
        alert(err.message);
      });
    })  
    e.preventDefault();
  }
  function handle_add_asset_to_blockchain(e){
    var accounts=[];
     web3.eth.getAccounts().then((acc)=>{
      console.log(acc);
      accounts = acc;
      // console.log("acounts : ", accounts[0]);
    }).then(function(){
        var asset_details = document.getElementById("asset_details").value;
        var details = asset_details.split(',');
        const asset_name = details[0];
        const asset_type = details[1];
        const owner_address = details[2];
        console.log(details);
      // console.log("acounts 32 : ", accounts[0]);
      Contract.methods.add_asset_to_blockchain(asset_name, asset_type, owner_address).send({
        from: accounts[0],
      }).catch(function(err){
        alert(err.message);
      });
    })  
    e.preventDefault();
  }
  function handle_consent_to_sell(e){
    var accounts=[];
     web3.eth.getAccounts().then((acc)=>{
      console.log(acc);
      accounts = acc;
      // console.log("acounts : ", accounts[0]);
    }).then(function(){
        var asset_details = document.getElementById("consent").value;
        var details = asset_details.split(',');
        const asset_name = details[0];
        const price = parseInt(details[1]);
        console.log(details); 
      // console.log("acounts 32 : ", accounts[0]);
      Contract.methods.consent_to_sell(asset_name, price).send({
        from: accounts[0],
      }).catch(function(err){
        alert(err.message);
      });
    })  
    e.preventDefault();
  }
  function handle_buy_asset(e){
    var accounts=[];
     web3.eth.getAccounts().then((acc)=>{
      console.log(acc);
      accounts = acc;
      // console.log("acounts : ", accounts[0]);
    }).then(function(){
        var asset_details = document.getElementById("buy").value;
        var details = asset_details.split(',');
        const owner_address = details[0];
        const asset_name = details[1];
        const price = parseInt(details[2]);
        console.log(details); 
      // console.log("acounts 32 : ", accounts[0]);
      Contract.methods.buy_asset(owner_address, asset_name, price).send({
        from: accounts[0],
        value: price
      }).catch(function(err){
        alert(err.message);
      });
    })  
    e.preventDefault();
  }
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="subscribe_now">
            <h1>Asset Management</h1>
            <p>Manage your assets securely with integrated blockchain management</p>
            <form class="subscribe_form">
                
              <div class="input-group">
                 <input type="text" class="form-control input-bg" name="email" id="asset_details" placeholder="string asset_name , string asset_type, string owner_address"/>
                 <span class="input-group-btn">
                      <button class="btn btn-default blue-bg" onClick={handle_add_asset_to_blockchain} type="button">add_asset_to</button>
                 </span>
              </div>
              <div class="input-group">
                <input type="text" class="form-control input-bg" name="email" id="supported_asset" placeholder="string asset_type"/>
                <span class="input-group-btn">
                     <button id = "add_supported_asset_btn" class="btn btn-default green-bg" type="button" onClick={handle_add_supported_asset}>add_supported_asset</button>
                </span>
             </div>
             <div class="input-group">
                <input type="text" class="form-control input-bg" name="email" id="validator_details" placeholder="address validator_address , string asset_type"/>
                <span class="input-group-btn">
                     <button id="" class="btn btn-default dark-green-bg" type="button" onClick={handle_add_validator}>add_validator</button>
                </span>
             </div>
             <div class="input-group">
                <input type="text" class="form-control input-bg" name="email" id="user_address" placeholder="address account_address"/>
                <span class="input-group-btn">
                     <button id="" class="btn btn-default green-bg" type="button" onClick={handle_add_wallet}>add_wallet</button>
                </span>
             </div>
             <div class="input-group">
                <input type="text" class="form-control input-bg" name="email" id="consent" placeholder="string asset_name, number asset_price"/>
                <span class="input-group-btn">
                     <button id="" class="btn btn-default orange-bg" type="button" onClick={handle_consent_to_sell}>consent_to_sell</button>
                </span>
             </div>
             <div class="input-group">
                <input type="text" class="form-control input-bg" name="email" id="buy" placeholder="address owner_address, string asset_name, number asset_price"/>
                <span class="input-group-btn">
                     <button id="" class="btn btn-default red-bg" type="button" onClick={handle_buy_asset}>buy_asset</button>
                </span>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
