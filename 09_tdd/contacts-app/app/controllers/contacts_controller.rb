class ContactsController < ApplicationController
  def index
    if params[:letter]
      @contacts = Contact.by_letter(params[:letter])
    else
      @contacts = Contact.all
    end

    respond_to do |format|
      format.html
      format.json {render :json => @contacts}
    end
  end

  def new
    @contact = Contact.new
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def edit
    @contact = Contact.find(params[:id])
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update(contact_params)
      redirect_to @contact
    else
      render :edit
    end
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to "/contacts/#{@contact.id}"
    else
      render :new
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    redirect_to contacts_path
  end

  private
    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email)
    end
end
