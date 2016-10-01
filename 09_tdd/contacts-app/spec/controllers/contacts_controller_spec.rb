require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
    before(:each) do
      Contact.destroy_all
    end

    describe "GET #show" do
      it "assigns the requested contact to @contact" do
        # Create a contact
        @contact = FactoryGirl.create(:contact)
        # Make a get request
          # second argument in parenthesis is the params, equivalent to entering in the url
        get( :show, {id: @contact.id} ) # get url 'contacts/:id'
        # Check that the instance variable has been created
          # assigns(:contact) == @contact
        expect(assigns(:contact)).to eq(@contact)
      end

      it "renders the show template" do
        @contact = FactoryGirl.create(:contact)
        get(:show, {id: @contact.id})
        expect(response).to render_template(:show)
      end
    end

    describe "GET #index - JSON" do
      context "without params[:letter]" do
        it "the JSON should include all contacts" do
          contact_one = FactoryGirl.create(:contact)
          contact_two = FactoryGirl.create(:contact)
          get(:index, format: :json)
          expect(response.body).to eq([contact_one, contact_two].to_json)
        end
      end
    end

    describe "GET #index" do
      context "without params[:letter]" do
        it "should populate an array of all contacts" do
          contact_one = FactoryGirl.create(:contact)
          contact_two = FactoryGirl.create(:contact)
          get(:index)
          # match_array rspec does type cooercsion to enable us to compare an activerecord ollection array with a typical ruby array
          expect(assigns(:contacts)).to match_array([contact_one, contact_two])
        end

        it "should render the index template" do
          get(:index)
          expect( response ).to render_template(:index)
        end

      end

      context "with params[:letter]" do
        it "should populate an array of appropriate contacts" do
          jones = FactoryGirl.create(:contact, :last_name => "Jones")
          johnson = FactoryGirl.create(:contact, :last_name => "Johnson")
          smith = FactoryGirl.create(:contact, :last_name => "Smith")

          get(:index, {letter: "J"})
          expect(assigns(:contacts)).to match_array([johnson, jones])
        end

        it "should render the index template" do
          get(:index)
          expect( response ).to render_template(:index)
        end

      end
    end

    describe "GET #new" do
      it "assigns a new contact to @contact" do
        get(:new)
        expect(assigns(:contact)).to be_a_new(Contact)
      end

      it "should render the new template" do
        get(:new)
        expect( response ).to render_template(:new)
      end
    end

    describe "GET #edit" do
      it "assigns an existing contact to @contact" do
        contact = FactoryGirl.create(:contact)
        get(:edit, {id: contact.id})
        expect(assigns(:contact)).to eq(contact)
      end

      it "should render the edit template" do
        contact = FactoryGirl.create(:contact)
        get(:edit, {id: contact.id})
        expect(response).to render_template(:edit)
      end
    end

    describe "POST #create" do
      context "with valid attributes" do
        it "should save the new contact in the database" do
          # expect {
          #   post(:create, contact: FactoryGirl.attributes_for(:contact))
          # }.to change(Contact, :count).by 1

          # Alternatively not using FactoryGirl you can use the following syntax
          expect {
            post(:create, contact: {
              :first_name => "Joe",
              :last_name => "Blow",
              :email => "joe@ga.co"
            }).to change(Contact, :count).by 1
          }
        end

        it "should redirect to contacts#show" do
          post( :create, contact: FactoryGirl.attributes_for(:contact))
          expect( response ).to redirect_to contact_path(assigns(:contact))
        end
      end

      context "with invalid attributes" do
        it "shouldn't save the contact" do
          expect {
            post(:create, contact: {
              :first_name => nil,
              :last_name => "Blow",
              :email => "joe@ga.co"
            }).to_not change(Contact, :count)
          }
        end
        it "should render the new template again" do
          post(:create, contact: {
            :first_name => nil,
            :last_name => "Blow",
            :email => "joe@ga.co"
          })
          expect( response ).to render_template(:new)
        end
      end
    end

    describe "PUT #update" do
      before(:each) do
        @contact = FactoryGirl.create(:contact, first_name: "Groucho", last_name: "Marx")
      end

      context "with valid attributes" do
        it "locates the correct contact" do
          put(:update, id: @contact.id, contact: FactoryGirl.attributes_for(:contact, first_name: "Groucho", last_name: "Marx"))
          expect(assigns(:contact)).to eq(@contact)
        end

        it "changes @contact's attributes" do
          put(:update, id: @contact.id, contact: FactoryGirl.attributes_for(:contact, first_name: "Zeppo", last_name: "Marx"))
          # rspec quirk, we need to reload to test it, or we can find it from the Contact model
          # @contact.reload
          expect(Contact.find(@contact).first_name).to eq("Zeppo")
        end

        it "redirects to @contact's show page" do
          put(:update, id: @contact.id, contact: FactoryGirl.attributes_for(:contact, first_name: "Groucho", last_name: "Marx"))
          expect(response).to redirect_to(contact_path(@contact))
        end
      end

      context "with invalid attributes" do
        it "shouldn't update @contact's attributes" do
          put(:update, id: @contact.id, contact: FactoryGirl.attributes_for(:contact, last_name: nil))

          @contact.reload
          expect(@contact.last_name).to eq("Marx")
        end

        it "should re-render the edit template" do
          put(:update, id: @contact.id, contact: FactoryGirl.attributes_for(:contact, last_name: nil))
          expect(response).to render_template(:edit)
        end
      end
    end

    describe "DELETE #destroy" do
      before(:each) do
        @contact = FactoryGirl.create(:contact)
      end

      it "deletes the contact" do
        expect {
          delete(:destroy, id: @contact.id)
        }.to change(Contact, :count).by -1
      end

      it "redirects to the contacts#index page" do
        delete(:destroy, id: @contact.id)
        expect(response).to redirect_to(contacts_path)
      end
    end
end
