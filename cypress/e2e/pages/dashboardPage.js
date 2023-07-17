class DashboardPage {
    elements = {
        dashboardTitle: () => cy.get('.h6.oxd-text')
    }

    getDashboardTitle() {
        this.elements.dashboardTitle()
    }
}

export default DashboardPage