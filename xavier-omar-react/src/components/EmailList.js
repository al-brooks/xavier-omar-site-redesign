const EmailList = () => {
  return (
    <section id="emailList">
      <span id="subscribe">Subscribe For VIP Access</span>
      <form
        id="emailForm"
        action="https://xavier-omar-redesign-server.herokuapp.com/email"
        method="POST"
      >
        <input type="text" name="email" placeholder="Enter E-mail" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default EmailList;
