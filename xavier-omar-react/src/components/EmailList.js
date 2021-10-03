const EmailList = () => {
  return (
    <form id="emailList" action="http://localhost:8080/email" method="POST">
      <input type="text" name="email" placeholder="Enter E-mail" required />
      <button>Submit</button>
    </form>
  );
};

export default EmailList;
