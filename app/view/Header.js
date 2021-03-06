Ext.define('project_app.view.Header', {
    extend: 'Ext.toolbar.Toolbar',

    xtype: 'app-header',

    cls: 'icon-blue',
    border: false,

    initComponent: function() {
        this.items = [{
                xtype: 'tbtext',
                text:'<div style="height:32px;width:32px;background: url(\'resources/images/app.png\')" align="center"></div>'
            },{
                xtype: 'label',
                style: { color: 'White', font: 'normal 22px courier'},
                text: 'APP HEADER TITLE'
            },
            '->',
            {
                xtype: 'tbtext',
                text:'<div style="height:16px;width:16px;background: url(\'resources/images/user.png\')" align="right"></div>'
            },{
                xtype: 'label',
                style: { color: 'White'},
                text: 'Jessonle Solana'
            },
            '-',
            {
                xtype: 'tbtext',
                text:'<div style="height:16px;width:16px;background: url(\'resources/images/logout.png\')" align="center"></div>'
            },{
                xtype: 'label',
                style: { color: 'White', cursor:'pointer'},
                text: 'LOGOUT',
                listeners : {
                render : function(c) {
                    c.getEl().on('click', function(){ this.fireEvent('click', c); }, c);
                    c.el.on('mouseover', function () {});
                }
            }
        }]
    
        this.callParent(arguments); 
    }
    
   
});


