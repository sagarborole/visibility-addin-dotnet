﻿// Copyright 2016 Esri 
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using ArcMapAddinVisibility.Helpers;
using ArcMapAddinVisibility.Views;

namespace ArcMapAddinVisibility.ViewModels
{
    public class MainViewModel : BaseViewModel
    {
        public MainViewModel()
        {
            // set some views
            _llosView = new VisibilityLLOSView();
            _rlosView = new VisibilityRLOSView();
        }
        #region Properties

        object selectedTab = null;
        public object SelectedTab
        {
            get { return selectedTab; }
            set
            {
                if (selectedTab == value)
                    return;

                selectedTab = value;
                var tabItem = selectedTab as TabItem;
                Mediator.NotifyColleagues(Constants.TAB_ITEM_SELECTED, ((tabItem.Content as UserControl).Content as UserControl).DataContext);
            }
        }

        #endregion

        #region Views

        private VisibilityLLOSView _llosView;
        public VisibilityLLOSView LLOSView
        {
            get { return _llosView; }
            set
            {
                _llosView = value;
            }
        }
        private VisibilityRLOSView _rlosView;
        public VisibilityRLOSView RLOSView
        {
            get { return _rlosView; }
            set
            {
                _rlosView = value;
            }
        }

        #endregion

    }
}