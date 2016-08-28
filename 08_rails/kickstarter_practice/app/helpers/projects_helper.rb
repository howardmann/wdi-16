module ProjectsHelper
  def own_project?
    @current_user.present? && @project.user == @current_user
  end

  def already_pledged?
    @current_user.present? && @current_user.pledges.pluck(:project_id).include?(@project.id)
  end

end
